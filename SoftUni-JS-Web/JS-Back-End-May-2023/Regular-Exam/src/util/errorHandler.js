function errorHandler(err) {
  if (err.name === 'ValidationError') {
    let errorMessage = '';
    for (field in err.errors) {
      errorMessage += `${err.errors[field].message}\n`;
    }
    return errorMessage;
  } else {
    return err.message;
  }
}

module.exports = { errorHandler };

