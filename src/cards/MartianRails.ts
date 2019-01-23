
import { IActiveProjectCard } from "./IActiveProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class MartianRails implements IActiveProjectCard {
    public cost: number = 13;
    public tags: Array<Tags> = [Tags.STEEL];
    public name: string = "Martian Rails";
    public cardType: CardType = CardType.ACTIVE;
    public actionText: string = "Spend 1 energy to gain 1 mega credit for each city tile on mars.";
    public description: string = "Fast and cheap transportation for goods and guys";
    public text: string = "";
    public play(player: Player, game: Game): Promise<void> {
        return Promise.resolve();
    }
    public action(player: Player, game: Game): Promise<void> {
        if (player.energy < 1) {
            return Promise.reject("Must have energy");
        }
        player.energy--;
        player.megaCredits += game.getCitiesInPlayOnMars();
        return Promise.resolve();
    }
}