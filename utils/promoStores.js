const SPECIAL_STORE_IDS = [18642, 18265]
const SPECIAL_STORE_ID_SET = new Set(SPECIAL_STORE_IDS)

export const specialStoreIds = SPECIAL_STORE_IDS

export const isSpecialStore = (storeId) => {
  const numericId = Number(storeId)
  if (Number.isNaN(numericId)) {
    return false
  }
  return SPECIAL_STORE_ID_SET.has(numericId)
}