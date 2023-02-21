function changeTextFormat() {
var valueTwo = loader.engine.document.getElementById(104009226).getProperty('value.value');
loader.engine.document.getElementById(104009226).setValue(({"value": valueTwo.toUpperCase()})); 
}
window.onchange = changeTextFormat;
