messaging.onBackgroundMessage(function(payload) {

  console.log(
    "[FCM] Background message received",
    payload
  );

  self.registration.showNotification(
    "🏸 テスト通知",
    {
      body: "Firebase通知が届きました",
      icon:
        "https://kougaku8.github.io/badminton-icon/heian-bado-yoyaku-icon_512.png"
    }
  );

});
