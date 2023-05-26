import React, {
  Fragment,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import "../Component/Homepage.css";
import "../Component/normailize.css";

export default function Homepage() {
  const [textarea, setTextarea] = useState("");
  const [listitems, setListitems] = useState([]);
  const [dataa, setDataa] = useState([
    "how are you",
    "good",
    "Thats awesome dude",
    "great",
    "Bye....Take care!"
  ]);
  useEffect(() => {
    var a = prompt("what's your name?");
    if (+a !== null) {
      setDataa(["Welcome" + " " + a, ...dataa]);
    }
  }, []);

  function handleuserName(a) {
    setListitems([
      ...listitems,
      "Welcome" +
        " " +
        a +
        " " +
        today.getHours() +
        ":" +
        (today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes()),
    ]);
  }

  var today = new Date();
  function handleChange(e) {
    setTextarea(e.target.value);
  }
  function handleClick() {
    setListitems([
      ...listitems,
      textarea +
        " " +
        today.getHours() +
        ":" +
        (today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes()),
    ]);
    setTextarea("");
  }

  return (
    <Fragment>
      <div className="chat">
        <div className="chat-title">
          <h1>We are Online</h1>
          <figure className="avatar">
            <img src="https://wmuza.github.io/SocketIO-Chat-App/public/img/sa.png" />
            <span className="chat-message-counter">3</span>
          </figure>
          <span className="online-bullet"></span>
        </div>
        <div className="messages">
          <div className="messages-content">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body height3">
                  <ul className="chat-list">
                    {listitems &&
                      listitems.map((element, index) => {
                        return (
                          <div key={index}>
                            <li className="out" key={index}>
                              <div className="chat-body">
                                <div className="chat-message">
                                  <p>{listitems[index]}</p>
                                </div>
                              </div>
                            </li>
                            <li className="in" key={element}>
                              <div className="chat-body">
                                <div className="chat-message">
                                  <p>{dataa[index]}</p>
                                </div>
                              </div>
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="message-box">
          <textarea
            type="text"
            className="message-input"
            placeholder="Type message..."
            name="textarea"
            value={textarea}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="message-submit"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
      </div>
    </Fragment>
  );
}
