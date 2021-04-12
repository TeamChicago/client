import axios from "axios";
import { API_URL } from "../constants"

class NewsListService { 
  async getNewsList(){
    return await axios
      .get(
        `${API_URL}/news/`
      )
      .then((res) => {
        return res.data;
      });
  }
}

export default new NewsListService();
