import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';


interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-black/95 border-white/10 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-center">
            <span className="text-lg font-bold text-gradient">联系销售</span>
            <p className="text-sm text-white/50 font-normal mt-1">
              扫码添加微信，获取企业版专属方案
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center py-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-brand-purple/30 blur-2xl rounded-full" />
            
            {/* QR Code */}
            <div className="relative bg-white p-4 rounded-2xl">
              <img
                src="/images/qrcode.jpg"
                alt="微信二维码"
                className="w-48 h-48 object-contain"
              />
            </div>
          </motion.div>

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">黎想</p>
            <p className="text-white/50 text-xs mt-1">广东 深圳</p>
            <p className="text-white/40 text-xs mt-3">
              扫一扫上面的二维码图案，加我为朋友
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm transition-colors"
          >
            关闭
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
