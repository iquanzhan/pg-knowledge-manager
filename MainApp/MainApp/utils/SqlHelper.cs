using MainApp.utils;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MainApp
{
    public static class SqlHelper
    {
        private static string connStr = @"Data Source=" + SQLiteInitialise.SQL_DATABAE_NAME + ";Version=3;";

        public static int ExecuteNonQuery(string sql, CommandType type, params SQLiteParameter[] pms)
        {
            using (SQLiteConnection conn = new SQLiteConnection(connStr))
            {
                using (SQLiteCommand cmd = new SQLiteCommand(sql, conn))
                {
                    cmd.CommandType = type;
                    if (pms != null)
                    {
                        cmd.Parameters.AddRange(pms);
                    }
                    conn.Open();
                    return cmd.ExecuteNonQuery();
                }
            }
        }

        public static object ExecuteScalar(string sql, CommandType type, params SQLiteParameter[] pms)
        {
            using (SQLiteConnection conn = new SQLiteConnection(connStr))
            {
                using (SQLiteCommand cmd = new SQLiteCommand(sql, conn))
                {
                    cmd.CommandType = type;
                    if (pms != null)
                    {
                        cmd.Parameters.AddRange(pms);
                    }
                    conn.Open();
                    return cmd.ExecuteScalar();
                }
            }
        }
        public static DataTable ExecuteDataTable(string sql, CommandType type, params SQLiteParameter[] pms)
        {
            DataTable table = new DataTable();
            using (SQLiteConnection conn = new SQLiteConnection(connStr))
            {

                using (SQLiteDataAdapter adapter = new SQLiteDataAdapter(sql, conn))
                {
                    adapter.SelectCommand.CommandType = type;
                    if (pms != null)
                    {
                        adapter.SelectCommand.Parameters.AddRange(pms);
                    }
                    conn.Open();
                    adapter.Fill(table);
                    return table;
                }
            }
        }

        public static SQLiteDataReader ExecuteDataReader(string sql, CommandType type, params SQLiteParameter[] pms)
        {
            SQLiteConnection conn = new SQLiteConnection(connStr);
            using (SQLiteCommand cmd = new SQLiteCommand(sql, conn))
            {
                cmd.CommandType = type;
                if (pms != null)
                {
                    cmd.Parameters.AddRange(pms);
                }
                try
                {
                    conn.Open();
                    return cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
                catch (Exception)
                {
                    conn.Close();
                    conn.Dispose();
                    throw;
                }

            }
        }
    }
}
