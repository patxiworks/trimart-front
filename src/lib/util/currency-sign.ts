export const setCurrency = (price: string) => {
    if (price.includes("NGN")) {
      const strippedPrice = price.replace("NGN", "")
      const textArea = document.createElement('textarea')
      textArea.innerHTML = "&#8358;";
      return textArea.value.replace(/\&nbsp;/g, '')+strippedPrice.trim()
    }
    return price
}