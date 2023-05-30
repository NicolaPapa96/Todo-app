import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";

export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: { "X-Api-Key": "mpmbCUcnRRgcvVu8woD31Q==AonylMQQIZa2tTvr" },
      })
      .then((response) => {
        setQuote(response.data[0].quote);
      });
  }, []);

  console.log(quote);

  return (
    <div>
      <h3 className="quote">"{quote}"</h3>
    </div>
  );
}
