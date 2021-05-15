using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;



namespace SmartHomeTEC.Class.Aposento
{


    public partial class Aposento
    {
        [JsonProperty("Aposento")]
        public List<AposentoElement> AposentoAposento { get; set; }
    }

    public partial class AposentoElement
    {
        [JsonProperty("Name")]
        public string Name { get; set; }
    }

    public partial class Aposento
    {
        public static Aposento FromJson(string json) => JsonConvert.DeserializeObject<Aposento>(json, SmartHomeTEC.Class.Aposento.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this Aposento self) => JsonConvert.SerializeObject(self, SmartHomeTEC.Class.Aposento.Converter.Settings);
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
