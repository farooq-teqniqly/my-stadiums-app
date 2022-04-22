import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

async function openDatabase() {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "SQLite"
    );
  }

  await FileSystem.downloadAsync(
    Asset.fromModule(require("./db.db")).uri,
    FileSystem.documentDirectory + "SQLite/db.db"
  );

  return SQLite.openDatabase("db.db");
}

export default openDatabase;
