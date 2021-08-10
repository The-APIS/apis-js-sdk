import Compound from './src/compound'
import ERC20 from './src/erc20'
import ERC721 from './src/erc721'
import ERC1155 from './src/erc1155'

const APIS = { ERC20, ERC721, ERC1155, Compound }

window.APIS = global.APIS = APIS

export { ERC20, ERC721, ERC1155, Compound }
