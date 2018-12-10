using MainApp.model;
using MainApp.utils;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MainApp
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {

        public MainWindow()
        {
            InitializeComponent();
        }


        private void Window_Initialized(object sender, EventArgs e)
        {
            //初始化时调用
            SQLiteInitialise.initDB();
        }

        //文本框改变事件
        private void textSearch_TextChanged(object sender, TextChangedEventArgs e)
        {
            string searchText = textSearch.Text.Trim();

            //搜索
            string sql = "select * from record where title like @title or content like @content";
            SQLiteParameter[] param = new SQLiteParameter[] {
                new SQLiteParameter("@title","%"+searchText+"%"),
                new SQLiteParameter("@content","%"+searchText+"%")
            };
            List<Record> list = new List<Record>();
            using (SQLiteDataReader reader = SqlHelper.ExecuteDataReader(sql, System.Data.CommandType.Text, param))
            {
                while (reader.Read())
                {

                    Record rec = new Record();
                    int id = reader.GetInt32(0);
                    String title = reader.GetString(1);
                    String content = reader.GetString(2);

                    rec.id = id;
                    rec.title = title;
                    rec.content = content;

                    list.Add(rec);
                }
            }

            listResult.ItemsSource = list;
        }

        private void btnAdd_Click(object sender, RoutedEventArgs e)
        {
            string title = textSearch.Text.Trim();

            AddWindow aw = new AddWindow();
            aw.ShowDialog();
        }

        private void listResult_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            Record rec =(Record)listResult.SelectedItem;

            ShowWindow sw = new ShowWindow(rec);
            sw.ShowDialog();
        }

        
    }
}
