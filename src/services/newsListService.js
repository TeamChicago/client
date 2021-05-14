import axios from "axios";
import { API_URL } from "../constants"

class NewsListService {
  async getNewsList() {
    return await axios
      .get(
        `${API_URL}/news/`
      )
      .then((res) => {
        for(var i=0; i<res.data.length; i++)
          console.log(res.data[i]);
        
        console.log("api 호출");
        return res.data;
      });
  }
}

export default new NewsListService();
