//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
// Importing OpenZeppelin's SafeMath Implementation
// import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Cause.sol";
import "hardhat/console.sol";

contract TheCrowdChain {
    using SafeMath for uint256;

    Cause[] private causes;

    event CauseCreated(
        address causeAddress,
        address creator,
        string title,
        string cause_type,
        string description,
        uint256 goal
    );

    /* Function to create a new cause */
    function startCause(
        string calldata title,
        string calldata cause_type,
        string calldata description,
        uint256 goal
    ) external {
        //creating an object for cause contract
        Cause newCauses = new Cause(
            payable(msg.sender),
            title,
            cause_type,
            description,
            goal
        );

        console.log("Current Data: ", title, cause_type);

        //push in causes array created earlier
        causes.push(newCauses);

        //emit CauseCreated event
        emit CauseCreated(
            address(newCauses),
            msg.sender,
            title,
            cause_type,
            description,
            goal
        );
    }

    /* Function to list all the causes */
    function getAllCauses() external view returns (Cause[] memory) {
        return causes;
    }
}
