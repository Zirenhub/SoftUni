async function getOffer(offerID) {
  try {
    const res = await fetch(
      `http://localhost:3030/data/offers/${offerID}`,
      { method: 'GET' }
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    alert(err.message);
    return null;
  }
}

export default getOffer;
