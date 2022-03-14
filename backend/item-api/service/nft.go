package service

import (
	"encoding/json"
	"fmt"

	"github.com/hackz-hackathon-giganoto/team-kankodori/backend/item-api/api"
)

func GetTransaction(txHash string) (*Transaction, error) {
	path := fmt.Sprintf("/v1/transactions/%s", txHash)

	apiResult, err := api.CallAPI(path, "GET", nil, nil)

	if err != nil {
		return nil, err
	}

	fmt.Println(string(apiResult))
	tx := Transaction{}
	if err := json.Unmarshal(apiResult, &tx); err != nil {
		fmt.Println(err.Error())
		return nil, err
	}
	return &tx, nil
}

func CreateNonFungible(name string) (*TransactionAccepted, error) {
	path := fmt.Sprintf("/v1/item-tokens/%s/non-fungibles/", mustGetEnv("ITEM_CONTRACT_ID"))

	params := map[string]interface{}{
		"name":         name,
		"ownerAddress": mustGetEnv("WALLET_ADDRESS"),
		"ownerSecret":  mustGetEnv("WALLET_SECRET"),
	}


	params := map[string]interface{}{
		"name":         name,
		"ownerAddress": mustGetEnv("WALLET_ADDRESS"),
		"ownerSecret":  mustGetEnv("WALLET_SECRET"),
	}

	apiResult, err := api.CallAPI(path, "POST", nil, params)
	if err != nil {
		return nil, err
	}

	txAccepted := &TransactionAccepted{}

	if err := json.Unmarshal(apiResult, txAccepted); err != nil {
		return nil, err
	}

	return txAccepted, nil
}