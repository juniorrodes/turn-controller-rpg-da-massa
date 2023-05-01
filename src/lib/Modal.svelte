<script lang="ts">
    export let showModal: boolean = false;

    let dialog: HTMLDialogElement;
    $: if (dialog && showModal) dialog.showModal();
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:close={() => (showModal=false)}
    on:click|self={() => dialog.close()} class="bg-slate-500 text-slate-50"
>
    <div on:click|stopPropagation>
        <slot class="rounded-md flex flex-col"/>
        <button on:click={() => dialog.close()}>Close modal</button>
    </div>
</dialog>