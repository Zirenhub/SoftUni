function objectFactory(library, orders) {
  const result = [];

  for (const order of orders) {
    const current = Object.assign({}, order.template);
    for (const part of order.parts) {
      current[part] = library[part];
    }
    result.push(current);
  }

  return result;
}

objectFactory();
