import axios from "axios";

export async function upload(data, url = "Template/User") {

  try {
    const formData = new FormData();
    console.log(formData);
    formData.append("ProfilePhoto", data);
    formData.append("Url", url);

    const req = await axios({
      method: "post",
      url: "MainAPP/FileUpload",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    });
    return { data: req.data, massType: 1 };
  } catch (e) {
    console.log(e);
    return { massType: -1 };
  }
}
