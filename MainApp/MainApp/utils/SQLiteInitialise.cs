using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.IO;
using System.Linq;
using System.Text;

namespace MainApp.utils
{
    public static class SQLiteInitialise
    {
        public static string SQL_DATABAE_NAME = "MyDatabase.db";

        public static void initDB()
        {
            if (!File.Exists(SQL_DATABAE_NAME))
            {
                SQLiteConnection.CreateFile(SQL_DATABAE_NAME);
                using (SQLiteConnection m_dbConnection = new SQLiteConnection("Data Source="+ SQL_DATABAE_NAME + ";Version=3;"))
                {
                    m_dbConnection.Open();
                    string sql = "CREATE TABLE record (\"id\"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\"title\"  TEXT,\"content\"  TEXT)";
                    using (SQLiteCommand command = new SQLiteCommand(sql, m_dbConnection))
                    {
                        command.ExecuteNonQuery();
                    }
                }
            }
        }
    }
}
