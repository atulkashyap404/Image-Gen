const API_key = "sk-proj-5x0NQnCdEOZREp6PP1rcT3BlbkFJMyfq7EozEgbmksEhUKzW"

const submitIcon = document.querySelector("#submit")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".images-section")



const getImages = async () => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_key}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: "1024x1024"
        })
    }


    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", options)

        const data = await response.json()
        console.log(data);

        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement("div")
            imageContainer.classList.add("image-container")
            const imageElement = document.createElement("img")
            imageElement.setAttribute("src", imageObject.url)
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
        })

    } catch (error) {
        console.error(error);
    }
}



submitIcon.addEventListener('click', getImages)
