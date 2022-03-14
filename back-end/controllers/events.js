const pendingAccept = (req, res) => {
  console.log('inside pendingAccept');
  res.send('inside pendingAccept');
};

const pendingDecline = (req, res) => {
  console.log('inside pendingDecline');
  res.send('inside pendingDecline');
};

const viewPending = (req, res) => {
  console.log('inside viewPending');
  res.send('inside viewPending');
};

const viewEvents = (req, res) => {
  console.log('inside viewEvents');
  res.send('inside viewEnevts');
};

const createEvent = (req, res) => {
  console.log('inside createEnebt');
  res.send('inside createEvent');
};

export {pendingAccept, pendingDecline, viewPending, viewEvents, createEvent};
