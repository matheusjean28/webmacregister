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
        //should reset state after display that at screen for a while
      const resetState = () => {
          setNotificationMessage(""),
           setNotificationStatus(false);
        };
        const intervalId = setInterval(resetState, 2000);
        
    
  }, [notificationStatus]);

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
