<script lang="ts">
  import './App.css';
  import Slider from './lib/Slider.svelte';
  import PlayerForm from './lib/PlayerForm.svelte';
  import { players, type Player } from './types/player';
  import Modal from './lib/Modal.svelte';

  let playersValue: Player[];
  let showModal: boolean = false;
  let playerForm: boolean = false;
  let incrementForm: boolean = false;
  players.subscribe(value => {
    playersValue = value
  })

  function advanceTurn(e: Event) {
    e.preventDefault()
    players.update(p => {
      let playerLeastAP = p.reduce((previous, current) => {
        return current.actionPoints > previous.actionPoints ? previous : current
      });
      let zeroPointsPlayers = p.filter((v) => v.actionPoints <= 0);
      if (zeroPointsPlayers.length > 0) {
        let message: string = "This players have 0 points\n";
        zeroPointsPlayers.forEach((v) => {
          message += v.name + "\n";
        })

        alert(message);
      }
      
      return p.map((v) => {
         return { name: v.name, actionPoints: (v.actionPoints - playerLeastAP.actionPoints)}
      })
    })
  }
</script>

<Modal bind:showModal>
  <PlayerForm />
</Modal>

<main class="h-screen justify-between items-center flex flex-col mx-auto">
  <div class="container text-slate-300 flex gap-3 flex-col h-fit">
    {#each playersValue as playerV }
      <Slider player={playerV} />
    {/each}
  </div>
  <div class="container text-slate-300 flex gap-3 flex-col h-fit">
    
    <button class="bg-slate-600 flex-1 rounded-sm" on:click={() => (showModal = true)}>Add character</button>
    <button class="bg-slate-600 flex-1 rounded-sm" on:click={advanceTurn}>Advance turn</button>
  </div>
</main>
