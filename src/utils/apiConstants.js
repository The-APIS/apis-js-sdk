const HOST = {
  DEVELOPMENT:"https://api.dev.theapis.io",
  PRODUCTION:"https://api.theapis.io"
}
const KEYS = {
  ERC721:{
    BALANCE_URL: "balance",
    TOKEN_ID_URL: "id",
    TOKEN_OWNER_URL:"owner",
    TOKEN_NAME_URL:"name",
    TOKEN_SYMBOL_URL:"symbol",
    TOTAL_SUPPLY_URL: "supply",
    CONTRACT_OWNER_URL: "contract",
    TOKEN_URI: "uri",
    ID_APPROVED_URL:"approved",
    GET_COLLECTION_URL:"collection",
    MINT_URL:"mint",
    TRANSFER_URL:"transfer",
    BURN_URL:"burn",
    SUPPORTS_INTERFACE_URL:"interface",
  },
  ERC1155:{
    BALANCE_URL: "erc1155/balance",
    // TOKEN_ID_URL: "id",
    // TOKEN_OWNER_URL:"owner",
    // TOKEN_NAME_URL:"name",
    // TOKEN_SYMBOL_URL:"symbol",
    // TOTAL_SUPPLY_URL: "supply",
    CONTRACT_OWNER_URL: "erc1155/contract",
    TOKEN_URI: "erc1155/uri",
    // ID_APPROVED_URL:"approved",
    // GET_COLLECTION_URL:"collection",
    MINT_URL:"erc1155/mint",
    MINT_BATCH_URL:"erc1155/mint/batch",
    TRANSFER_URL:"erc1155/transfer",
    TRANSFER_BATCH_URL:"erc1155/transfer/batch",
    BURN_URL:"erc1155/burn",
    BURN_BATCH_URL:"erc1155/burn/batch",
    SUPPORTS_INTERFACE_URL:"erc1155/interface",
  }
}

export default {
  KEYS,
  HOST
}