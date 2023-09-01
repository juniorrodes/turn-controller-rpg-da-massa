<script lang="ts">
    import MdClose from 'svelte-icons/md/MdClose.svelte'
    export let showModal: boolean = false;

    let dialog: HTMLDialogElement;
    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal=false)}
    on:click|self={() => dialog.close()} class="bg-slate-500 p-2 rounded-md text-slate-50"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <button on:click={() => dialog.close()} class="w-5 text-slate-500">
            <MdClose />
        </button>
        <slot class="rounded-md flex flex-col"/>
    </div>
</dialog>