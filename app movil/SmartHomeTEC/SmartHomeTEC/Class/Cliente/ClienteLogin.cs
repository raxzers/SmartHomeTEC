using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace SmartHomeTEC.Class.Cliente
{


    public partial class ClienteLogin
    {
        [JsonProperty("ClienteLogin")]
        public List<ClienteLoginElement> ClienteLoginClienteLogin { get; set; }
    }

    public partial class ClienteLoginElement
    {
        [JsonProperty("Mail")]
        public string Mail { get; set; }

        [JsonProperty("Password")]
        public string Password { get; set; }
    }

    public partial class ClienteLogin
    {
        public static ClienteLogin FromJson(string json) => JsonConvert.DeserializeObject<ClienteLogin>(json, SmartHomeTEC.Class.Cliente.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this ClienteLogin self) => JsonConvert.SerializeObject(self, SmartHomeTEC.Class.Cliente.Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters =
            {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
