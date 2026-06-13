import { Plugin } from 'obsidian';

export default class CodeStyleKeysPlugin extends Plugin {

	async onload() {
		this.registerDomEvent(window, 'beforeinput', (e: InputEvent) => {
			if (e.data !== '`') return;

			const editor = this.app.workspace.activeEditor?.editor;
			if (!editor) return;

			const selectedText = editor.getSelection();
			if (!selectedText) return;

			e.preventDefault();
			e.stopImmediatePropagation();

			const from = editor.getCursor('from');
			const to = editor.getCursor('to');
			const isMultiLine = from.line !== to.line;
			const replacement = isMultiLine
				? '```\n' + selectedText + '\n```'
				: '`' + selectedText + '`';

			editor.replaceSelection(replacement);

			window.setTimeout(() => {
				const insertionStartOffset = editor.posToOffset(from);
				const insertionEndOffset = insertionStartOffset + replacement.length;
				const cleanupFrom = editor.offsetToPos(insertionEndOffset);
				const cleanupTo = editor.offsetToPos(insertionEndOffset + 1);
				const trailingChar = editor.getRange(cleanupFrom, cleanupTo);
				if (trailingChar === '`') {
					editor.replaceRange('', cleanupFrom, cleanupTo);
				}
			}, 0);
		}, { capture: true });
	}

	onunload() { }
}