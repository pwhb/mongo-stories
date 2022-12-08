export const formatResponse = (data: any) => {
    if (data[0]) {
        return {
            data,
            total: data.length
        }
    } else {
        return {
            data
        }
    }
}