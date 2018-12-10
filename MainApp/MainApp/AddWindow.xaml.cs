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
    /// AddWindow.xaml 的交互逻辑
    /// </summary>
    public partial class AddWindow : Window
    {
        public AddWindow()
        {
            InitializeComponent();
        }

        //添加数据
        private void btnAdd_Click(object sender, RoutedEventArgs e)
        {
            string title = textTitle.Text.Trim();
            string content = textContent.Text.Trim();

            string sql = "insert into record(title,content) VALUES(@title,@content)";
            SQLiteParameter[] param = new SQLiteParameter[] {
                new SQLiteParameter("@title",title),
                new SQLiteParameter("@content",content)
            };

            SqlHelper.ExecuteNonQuery(sql, System.Data.CommandType.Text, param);
        }
    }
}
