import axios from "axios";
import { API_URL } from "../constants"

class NewsPostService {
  async postNews(data) {
    return await axios
      .post(
        `${API_URL}/news/`
      ,{
          title : data.titleValue,
          content : data.contentValue,
          writer : data.writerValue
        })
      .then((res) => {
        console.log(data)
        console.log("삽입 api 호출");
        return res.data;
      });
  }
}

export default new NewsPostService();
