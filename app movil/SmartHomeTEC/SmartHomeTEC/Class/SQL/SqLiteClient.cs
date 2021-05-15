
using SmartHomeTEC.Class.SQL;
using SmartHomeTEC.Dependencies;
using SQLite;
using System;
using System.Collections.Generic;
using System.Text;
using Xamarin.Forms;

[assembly: Dependency(typeof(SqLiteClient))]
namespace SmartHomeTEC.Class.SQL
{
    public class SqLiteClient:IDataBase
    {
        public SQLiteConnection GetConnection() {
            throw new NotImplementedException();
        }
    }
}
