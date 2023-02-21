function changeTextFormat() {
var valueTwo = loader.engine.document.getElementById(0000000e).getProperty('value.value');
loader.engine.document.getElementById(0000000e).setValue(({"value": valueTwo.toUpperCase()})); 
}
window.onchange = changeTextFormat;
