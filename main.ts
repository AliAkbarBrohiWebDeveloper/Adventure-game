#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold('\n\t Welcome to Ali Akbar Brohi Adventure Game\n\t'))
// for player
class Player {
    name: string;
    Health = 100;

    constructor(name: string) {
        this.name = name;
    }

    decreaseHealth() {
        this.Health -= 20;
    }

    increaseHealth() {
        this.Health = 100;
    }
}

// for enemy
class Enemy {
    name: string;
    Health = 100;

    constructor(name: string) {
        this.name = name;
    }

    decreaseHealth() {
        this.Health -= 20;
    }

    increaseHealth() {
        this.Health = 100;
    }
}

async function main() {
    // player object
    const { PlayerName } = await inquirer.prompt([{
        name: "PlayerName",
        type: "input",
        message: "Enter a Player Name"
    }]);

    // enemy object
    const { EnemyType } = await inquirer.prompt([{
        name: "EnemyType",
        type: "list",
        message: "Select the Enemy you fight with",
        choices: ["Alien", "Witch", "Zombie"]
    }]);

    // battle field
    const player1 = new Player(PlayerName);
    const enemy = new Enemy(EnemyType);

    console.log(chalk.green.bold(`${enemy.name}  V/S  ${player1.name}`));

    do {
        const { action } = await inquirer.prompt([{
            type: "list",
            name: "action",
            message: "Choose the attack type to perform action",
            choices: ["Attack", "Defend", "Target", "Range", "Run"]
        }]);

        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    player1.decreaseHealth();
                    console.log(chalk.yellow.bold(`${player1.name}: Health ${player1.Health}`));
                    console.log(chalk.red.bold(`${enemy.name} health: ${enemy.Health}`));
                    if (player1.Health <= 0) {
                        console.log(chalk.red.bold("\n\tYou lost! Try again.\n\t"));
                        return;
                    }
                } else {
                    enemy.decreaseHealth();
                    console.log(chalk.green.bold(`${player1.name}: Health ${player1.Health}`));
                    console.log(chalk.red.bold(`${enemy.name} health: ${enemy.Health}`));
                    if (enemy.Health <= 0) {
                        console.log(chalk.green.bold("\n\tCongratulations! You have Wonn\n\t"));
                        return;
                    }
                }
                break;
        }
    } while (true)
}

main();
