function changeTextFormat() {
var valueTwo = loader.engine.document.getElementById(text-0000000e).getProperty('value.value');
loader.engine.document.getElementById(text-0000000e).setValue(({"value": valueTwo.toUpperCase()})); 
}
window.onchange = changeTextFormat;