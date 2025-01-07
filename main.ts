controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Why couldn't the skeleton eat spicy food?", DialogLayout.Top)
    effects.confetti.startScreenEffect()
    game.showLongText("He didn't have the stomach for it.", DialogLayout.Bottom)
    mySprite.sayText("Hey!")
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`aquatank`)
mySprite = sprites.create(assets.image`SkeltonStandingFront`, SpriteKind.Player)
