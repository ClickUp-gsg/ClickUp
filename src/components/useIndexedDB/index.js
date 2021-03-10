import PouchDB from "pouchdb";

function getPouchDB(dbName) {
  if (process.browser) {
    return new PouchDB(dbName, { auto_compaction: true });
  }
}

export async function getDB(dbName) {
  let userDoc;
  try {
    const db = getPouchDB(dbName);
    userDoc = await db.get(dbName);
  } catch (e) {
    console.log(e);
  }
  return userDoc;
}

export async function setDB(dbName, payload) {
  const db = getPouchDB(dbName);
  try {
    const userDoc = await db.get(dbName); // if there's not dbName row, then will throw error
    userDoc.payload = payload;
    db.put(userDoc); // update old db
  } catch (e) {
    db.put({
      _id: dbName,
      payload,
    }); // set new db
  }
}
