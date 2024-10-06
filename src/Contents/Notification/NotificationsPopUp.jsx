import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

//use import requireds for styles
import "./NotificationStyles/NotificationStyles.css";

const NotificationsPopUp = () => {
  const {
    notificationStatus,
    setNotificationStatus,
    notificationMessage,
    setNotificationMessage,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (notificationStatus) {
      const timerId = setTimeout(() => {
        setNotificationMessage("");
        setNotificationStatus(false);
      }, 5000);

      
      return () => clearTimeout(timerId);
    }
  }, [notificationStatus, setNotificationMessage, setNotificationStatus]);

  return (
    <>
      {notificationStatus ? (
        <h6 className="NotificationContainer">{notificationMessage}</h6>
      ) : (
        ""
      )}
    </>
  );
};

export default NotificationsPopUp;
