//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
// Importing OpenZeppelin's SafeMath Implementation
// import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Cause {
    using SafeMath for uint256;

    //charity cause current status
    enum State {
        pending,
        completed
    }

    address payable public creator;
    uint256 public goal;
    uint256 public current;
    string public title;
    string public cause_type;
    string public description;

    State public state = State.pending;
    mapping(address => uint256) public donors;

    //event when ever funding or donation is received
    event donationReceived(address donor, uint256 amount, uint256 current);

    //event when donation is completed and amount is dispatched
    event donationSentToTarget(address recipient);

    //check the current state via modifier
    modifier checkState(State state_) {
        require(state == state_);
        _;
    }

    //check if caller is creator
    modifier isCreator() {
        require(msg.sender == creator);
        _;
    }

    constructor(
        address payable c_starter,
        string memory c_title,
        string memory c_type,
        string memory c_description,
        uint256 c_goal
    ) {
        creator = c_starter;
        title = c_title;
        cause_type = c_type;
        description = c_description;
        goal = c_goal;
        current = 0;
    }

    /* Function to contribute/donate to cause*/
    function donate() external payable checkState(State.pending) {
        require(msg.sender != creator);
        donors[msg.sender] = donors[msg.sender].add(msg.value);
        current = current.add(msg.value);
        //emit donationReceived event
        emit donationReceived(msg.sender, msg.value, current);
        //check if donation is completed
        checkIfDonationCompleted();
    }

    function checkIfDonationCompleted() public {
        if (current >= goal) {
            state = State.completed;
            payToTarget();
        }
    }

    function payToTarget() internal checkState(State.completed) returns (bool) {
        uint256 raised = current;
        current = 0;

        if (creator.send(raised)) {
            emit donationSentToTarget(creator);
            return true;
        } else {
            current = raised;
            state = State.completed;
        }
        return false;
    }

    function get()
        public
        view
        returns (
            address payable c_starter,
            string memory c_title,
            string memory c_type,
            string memory c_description,
            State currentState,
            uint256 c_goal,
            uint256 c_raised
        )
    {
        c_starter = creator;
        c_title = title;
        c_type = cause_type;
        currentState = state;
        c_description = description;
        c_goal = goal;
        c_raised = current;
    }
}
