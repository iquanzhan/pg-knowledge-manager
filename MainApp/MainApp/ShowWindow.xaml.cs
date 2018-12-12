using MainApp.model;
using System;
using System.Collections.Generic;
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
using System.Windows.Shapes;

namespace MainApp
{
    /// <summary>
    /// ShowWindow.xaml 的交互逻辑
    /// </summary>
    public partial class ShowWindow : Window
    {
        private int id;
        public ShowWindow()
        {
            InitializeComponent();
        }

        public ShowWindow(Record res)
        {
            InitializeComponent();
            id = res.id;
            textTitle.Content = res.title;
            textContent.Text = res.content;
        }

        private void btnUpdate_Click(object sender, RoutedEventArgs e)
        {
            //更新原先的信息
            string title =textTitle.Content.ToString();
            string content = textContent.Text;

            string sql = "update record set title=@title,content=@content where id=@id";
            SQLiteParameter[] pms = new SQLiteParameter[] {
                new SQLiteParameter("@title",title),
                new SQLiteParameter("@content",content),
                new SQLiteParameter("@id",id),
            };
            SqlHelper.ExecuteNonQuery(sql, System.Data.CommandType.Text, pms);
            this.Close();
        }
    }
}
