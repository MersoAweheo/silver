gdjs.waitingCode = {};
gdjs.waitingCode.GDsilverObjects1= [];
gdjs.waitingCode.GDsilverObjects2= [];

gdjs.waitingCode.conditionTrue_0 = {val:false};
gdjs.waitingCode.condition0IsTrue_0 = {val:false};
gdjs.waitingCode.condition1IsTrue_0 = {val:false};


gdjs.waitingCode.eventsList0xb1208 = function(runtimeScene) {

{


gdjs.waitingCode.condition0IsTrue_0.val = false;
{
gdjs.waitingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.waitingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "G:\\Important Game Stuff\\The Mobius Strip\\Ingame Music\\curiousitybegin.ogg", true, 100, 1);
}}

}


}; //End of gdjs.waitingCode.eventsList0xb1208


gdjs.waitingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.waitingCode.GDsilverObjects1.length = 0;
gdjs.waitingCode.GDsilverObjects2.length = 0;

gdjs.waitingCode.eventsList0xb1208(runtimeScene);
return;
}
gdjs['waitingCode'] = gdjs.waitingCode;
