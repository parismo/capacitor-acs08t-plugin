import Foundation

@objc public class Rfid: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
