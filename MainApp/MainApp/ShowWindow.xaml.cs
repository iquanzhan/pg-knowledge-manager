using MainApp.model;
using System;
using System.Collections.Generic;
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
        public ShowWindow()
        {
            InitializeComponent();
        }

        public ShowWindow(Record res)
        {
            InitializeComponent();
            textTitle.Content = res.title;
            textContent.Text = res.content;
        }
    }
}
