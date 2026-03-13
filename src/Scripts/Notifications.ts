export var NotificationAllowed = false;

export default async function AskForNotifications() {
    if (!("Notification" in window)) {
        console.log("Sorry... Your Browser doesn't support notifications...");
        return 0;
    }

    Notification.requestPermission().then(Permission => {
        if (Permission === "granted") {
            console.log("Thx :)");
            NotificationAllowed = true;
            return 1;
        } else if (Permission === "denied") {
            console.log("Pls :(");
            return 0;
        } else {
            console.log("???");
        }
    })
}
export function BlockNotifications() {
    if (!("Notification" in window)) {
        console.log("Sorry... Your Browser doesn't support notifications...");
        return 0;
    }
    NotificationAllowed = false;
}