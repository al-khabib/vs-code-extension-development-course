import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vstodo" is now active!')

  const disposable = vscode.commands.registerCommand(
    'vstodo.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from VSToDo!')
    }
  )

  const askQuestion = vscode.commands.registerCommand(
    'vstodo.askQuestion',
    () => {
      vscode.window.showInformationMessage('How was your day?', 'Good', 'Bad')
    }
  )

  context.subscriptions.push(disposable)
  context.subscriptions.push(askQuestion)
}

export function deactivate() {}
