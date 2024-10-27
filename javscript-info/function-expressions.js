function ask(question, yes, no) {
  if (question) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("", showOk, showCancel);
