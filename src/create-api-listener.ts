export const createApiListener = (
  apiCall: (...args: any[]) => Promise<any>,
  callback: (data: any) => boolean,
  delay: number = 2000,
  timeout: number = 50000,
) => {
  let startTime: number | null = null

  const wait = (time: number) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time)
    })
  }

  const apiListener = async (): Promise<any> => {
    if (startTime) {
      await wait(delay)
    }

    startTime = startTime || +new Date()

    const result = await apiCall()

    const timeDiff = +new Date() - startTime

    return callback(result) || timeDiff > timeout
      ? Promise.resolve(result)
      : apiListener()
  }

  return apiListener
}
