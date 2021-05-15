using System;
using System.Collections.Generic;
using System.Text;

namespace SmartHomeTEC.Dependencies
{
    interface IDataBase
    {
        SQLite.SQLiteConnection GetConnection();
    }
}
