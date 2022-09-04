const formatCurrency = number => {
    return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}

const formatNumber = number => parseFloat(number.toFixed(1))

export { formatCurrency, formatNumber }