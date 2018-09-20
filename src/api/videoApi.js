import BaseApi from "./_baseApi";

export default class extends BaseApi {
  getShow(id) {
    return this.http.get(`video/${id}/show?refer=web`);
  }

  playing(id) {
    return this.http.post("video/playing", {
      id
    });
  }
}
